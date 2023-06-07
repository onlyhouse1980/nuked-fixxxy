import { Members } from '../../../../data5'

export default function overHandler({ query: { last_name } }, res) {
  const filtered = Members.filter((p) => p.last_name === last_name)

  // User with meter_serialNum exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with last_name: ${last_name} not found.` })
  }
}