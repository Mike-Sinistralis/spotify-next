import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

import PrismaClient from '~Lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { Prisma } from '@prisma/client';

interface SignUpModel {
  email: string;
  password: string;
}

interface SignUpRequest<T> extends NextApiRequest {
  body: T;
}

export default async (req: SignUpRequest<SignUpModel>, res: NextApiResponse): Promise<void> => {
  const salt = bcrypt.genSaltSync();
  const { email, password } = req.body;

  if (req.method !== 'POST') {
    res.status(422);
    res.json({ error: 'This API only accepts POST requests' });
    return;
  }

  let user: Prisma.UserGetPayload<Prisma.UserArgs>;

  try {
    user = await PrismaClient.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
      },
    });
  } catch (e) {
    res.status(401);
    res.json({ error: 'User already exists' });
    return;
  }

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      time: Date.now(),
    },
    process.env.JWT_SECRET,
    { expiresIn: '8h' },
  );

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('jwt', token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60 * 1000,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    }),
  );
  res.status(200);
  res.json(user);
};
