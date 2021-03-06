import mongoose, { Schema, Document } from 'mongoose';

export interface IConcert extends Document {
    name: String,
    description: String
}
  
const ConcertSchema: Schema = new Schema({
    name: { type: String, require: true, minlength: 1, maxlength: 100 },
    description: { type: String, minlength: 1, maxlength: 350 },
    dateTime: { type: Date },
    socialNetworks: [{ type: String }],
    headlinerImage: { type: String },
    posterImage: { type: String },
    ticketingHost: { type: String },
    ticketingUrl: { type: String },
    trailerUrl: { type: String },
    genre: {type: String},
    tags: [{ type: String, enum: ['LIVE', 'VIRTUAL', 'METAL', 'ROCK']}],
    venue : { type: Schema.Types.ObjectId, ref: 'Venue' },
    state : { type: Schema.Types.ObjectId, ref: 'State', require: true },
    bands : [{ type: Schema.Types.ObjectId, ref: 'Band', require: true}]
});
  
export const concertModel = mongoose.model<IConcert>('Concert', ConcertSchema);