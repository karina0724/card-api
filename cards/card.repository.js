const fs = require('fs/promises');
const path = require('path');
const file = path.join(__dirname, '../data/cards.json');

const readData = async () => {
  try {
    const content = await fs.readFile(file, 'utf-8');
    return JSON.parse(content || '[]');
  } catch {
    return [];
  }
};

const writeData = async (data) => {
  await fs.writeFile(file, JSON.stringify(data, null, 2));
};

module.exports = {
  findAll: async () => await readData(),

  findById: async (id) => {
    const cards = await readData();
    return cards.find(c => c.id === id);
  },

  save: async (card) => {
    const cards = await readData();
    cards.push(card);
    await writeData(cards);
    return card;
  },

  update: async (id, updated) => {
    const cards = await readData();
    const index = cards.findIndex(c => c.id === id);
    if (index === -1) return null;
    cards[index] = updated;
    await writeData(cards);
    return updated;
  },

  delete: async (id) => {
    const cards = await readData();
    const index = cards.findIndex(c => c.id === id);
    if (index === -1) return false;
    cards.splice(index, 1);
    await writeData(cards);
    return true;
  }
};
