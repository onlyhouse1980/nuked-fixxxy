import { Users } from '../../../../data5'

export const config = {
  runtime: 'edge',
};
 

export default function overHandler({ query: { id } }, res) {
  const filtered = Users.filter((p) => p.id === id)

  // User with last_name exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}