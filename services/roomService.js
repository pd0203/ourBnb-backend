const { roomDao } = require('../models');

const getRoomList = async (
	location,
	checkin,
	checkout,
	person,
	roomTypeId,
	optionIdForSort,
	userId,
) => {
	const { region, roomList } = await roomDao.getRoomList(
		location,
		checkin,
		checkout,
		person,
		roomTypeId,
		optionIdForSort,
		userId,
	);

	const roomListInfo = {};

	roomListInfo['location'] = region['name'];
	roomListInfo['lat'] = region['lat'];
	roomListInfo['lng'] = region['lng'];
	roomListInfo['roomList'] = roomList;

	return roomListInfo;
};

const getOptions = async () => {
	return await roomDao.getOptions();
};

module.exports = { getRoomList, getOptions };