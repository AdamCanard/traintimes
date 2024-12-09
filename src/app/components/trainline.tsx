export default function TrainLine(props: { trains: string[] }) {
  return (
    <>
      {props.trains.map((train, index) => {
        return (
          <option value={train} key={index}>
            {train}
          </option>
        );
      })}
    </>
  );
}
