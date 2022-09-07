import Clan from "../../../models/Clan.model"
import ClanMember from "../../../models/ClanMember.model"

const handler = async (req, res) => {
  const { clanId } = req.query
  const clan = await Clan.findById(clanId).lean()
  const members = await ClanMember.find({ clan }).sort('-combatRating').lean()
  res.status(200).json(members)
}

export default handler
