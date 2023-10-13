import { people } from '../../../../data'


export default function personHandler({ query: { meter_serialNum } }, res) {
  try {

    const person = people.find((p) => p.meter_serialNum === meter_serialNum)

    // User with meter_serialNum exists
    if (person) {
      res.status(200).json(person)
    } else {
      const sanitizedMeterSerialNum = sanitize(meter_serialNum);

      res.status(404).json({ message: `User with meter_serialNum: ${meter_serialNum} not found.` })
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while processing the request." })
  }
}
