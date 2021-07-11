import { User } from './User';

const defaultUser: User = {
  id: '29f51e42-c6ca-4f17-ac93-7131eeb4cffc',
  firstName: 'Kim',
  lastName: 'Su',
  pronouns: 'they/them',
}

const createMockUser = (overwrites: Partial<User> = {}) => ({
  ...defaultUser,
  ...overwrites
});

export {
  createMockUser
};
