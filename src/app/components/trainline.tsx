export default function TrainLine(props: { trains: string[] }) {
  return (
    <>
      <option value={""}></option>
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
