import mongoose from 'mongoose'

export interface countrySchemaInterface{
    name:string;
    code:string;
}
const countrySchema = new mongoose.Schema<countrySchemaInterface>({
    name:String,
    code:String
})

export default mongoose.model<countrySchemaInterface>('Country',countrySchema)