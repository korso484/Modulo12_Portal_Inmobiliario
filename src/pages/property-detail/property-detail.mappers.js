import { getRoomWord } from '../property-list/property-list.mappers';

export const mapPropertyFromApiToViewModel = property => {
    return {
        id: property.id,
        mainImage: Array.isArray(property.images) ? property.images[0] : '',
        title: property.title,
        city: property.city,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        squareMeter: `${property.squareMeter}m2`,
        bathrooms: property.bathrooms,
        price: `${property.price.toLocaleString()} €`,
        notes: property.notes,
        mainFeatures: property.mainFeatures,
        equipments: property.equipmentIds,
        locationUrl: property.locationUrl,
        images: property.images,
    };
};