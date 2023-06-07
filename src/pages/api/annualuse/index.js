import { Members } from '../../../../data5'


export default function ohandler(req, res) {
  res.status(200).json(Members)
}