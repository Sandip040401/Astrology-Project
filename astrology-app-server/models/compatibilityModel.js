import mongoose from 'mongoose';

const CompatibilitySchema = new mongoose.Schema({
  sign1: String,
  sign2: String,
  loveCompatibility: String,
  sexualCompatibility: String,
  friendshipCompatibility: String,
  communicationCompatibility: String,
  relationshipTips: String,
});

const Compatibility = mongoose.model('Compatibility', CompatibilitySchema);

export default Compatibility;
