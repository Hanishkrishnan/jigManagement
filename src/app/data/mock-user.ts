import { User } from '../models/user';

export const MOCK_USERS: User[] = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@test.com',
    password: 'admin123',
    role: 'ADMIN',
    permission: [
      'REQUEST_READ',
      'REQUEST_CREATE',
      'REQUEST_UPDATE',
      'REQUEST_DELETE',
      'REQUEST_APPROVE',
      'REQUEST_REJECT',
      'USER_READ',
      'USER_CREATE',
      'USER_UPDATE',
      'USER_DELETE'
    ]
  },
  {
    id: 2,
    name: 'Normal User',
    email: 'user@test.com',
    password: 'user123',
    role: 'USER',
    permission: [
      'REQUEST_READ',
      'REQUEST_CREATE'
    ]
  },
  {
    id: 3,
    name: 'Manager User',
    email: 'manager@test.com',
    password: 'manager123',
    role: 'MANAGER',
    permission: [
      'REQUEST_READ',
      'REQUEST_UPDATE',
      'REQUEST_APPROVE',
      'REQUEST_REJECT'
    ]
  }
];