exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          id: '1',
          name: 'Super Admin',
          email: 'superadmin@email.com',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
          uid: 'Y9n1rfjmI5Q2WDR9YlXFiVyo4B03',
        },
        {
          id: '2',
          name: 'Admin',
          email: 'admin@email.com',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
          uid: 'WXfchlHTBKYSOhZTLRV1dwchiYi1',
        },
        {
          id: '3',
          name: 'User',
          email: 'user@email.com',
          created_at: '2020-03-16 21:03:55',
          updated_at: '2020-03-16 21:03:55',
          deleted_at: null,
          uid: '45XsMfmwZLVDnVyV8dFWQxZ2Pb73',
        },
      ]);
    });
};
