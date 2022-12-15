import { LastNames } from '../../../../data1'


export default function ohandler(req, res) {
  res.status(200).json(LastNames)
}
