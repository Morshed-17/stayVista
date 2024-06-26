import axiosSecure from ".";

//fetch all rooms from db

export const getAllRooms = async () => {
  const { data } = await axiosSecure("/rooms");
  return data;
};

// fetch all rooms for host

export const getHostRooms = async (email) => {
  const { data } = await axiosSecure(`/rooms/${email}`);
  return data;
};

// fetch single rooom data from db

export const getRoom = async (id) => {
  const { data } = await axiosSecure(`/room/${id}`);
  return data;
};

// save a room data in db

export const addRoom = async (roomData) => {
  const { data } = axiosSecure.post("/rooms", roomData);
  return data;
};
