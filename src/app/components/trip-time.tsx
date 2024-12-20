export default function TripTime(props: { difference: number }) {
  return (
    <div
      className={
        "bg-gray-400 px-5 py-2 w-52 text-center text-black text-md font-normal m-2"
      }
    >
      <p>{(props.difference / 60).toFixed(2)} minutes</p>
    </div>
  );
}
