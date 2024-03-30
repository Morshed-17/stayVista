import Container from "../../components/Shared/Container";
import { useParams } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import Calender from "../../components/RoomDetails/Calender";
import RoomReservation from "../../components/RoomDetails/RoomReservation";
const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((room) => room._id === id);
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>

      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
        <Header room={room}/>
        
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-7 mt-12">
          <RoomInfo room={room}/>
          <div className="md:col-span-3 order-first md:order-last mb-10">
            <RoomReservation room={room}/>
          </div>
        </div>
        
      </div>
    </Container>
  );
};

export default RoomDetails;
