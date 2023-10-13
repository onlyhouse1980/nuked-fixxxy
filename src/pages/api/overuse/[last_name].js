import { LastNames } from '../../../../data1'

export default function overHandler({ query: { last_name } }, res) {
  try {
    const filtered = LastNames.filter((p) => p.last_name === last_name)

    // User with meter_serialNum exists
    if (filtered.length > 0) {
      res.status(200).json(filtered)
    } else {
      const sanitizedLastName = sanitizeInput(last_name);
      res.status(404).json({ message: `User with last_name: ${sanitizedLastName} not found.` })    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.' })
  }
}
