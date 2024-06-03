// Nomenclatura de variáveis

/*
 * Evitar diminuir muito a variável
 */

const users = ['Gabriel', 'Junior'];

// Ruim
const filtered = users.filter((u) => {
  return u.startsWith('G');
});

// Bom
const usersStartWithLetterG = users.filter((user) => {
  return user.startsWith('G');
});

/* Evitar nomes genéricos ( data, response, list, args, params) */
