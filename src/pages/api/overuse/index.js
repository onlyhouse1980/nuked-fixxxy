import { lastname } from '../../../../data1'

export default function ohandler(req, res) {
  res.status(200).json(lastname)
}
