const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma;

const userDao = require('./UserDao');
const roomDao = require('./RoomDao');
const roomDetailDao = require('./RoomDetailDao');

module.exports = { userDao, roomDao, roomDetailDao };
