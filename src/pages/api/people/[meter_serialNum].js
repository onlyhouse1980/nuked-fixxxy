import { people } from '../../../../data'

export default function personHandler({ query: { meter_serialNum } }, res) {
  const filtered = people.filter((p) => p.meter_serialNum === meter_serialNum)

  // User with meter_serialNum exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with meter_serialNum: ${meter_serialNum} not found.` })
  }
}
