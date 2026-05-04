export type MedicalStatusValue = 'Sí' | 'No' | 'Pte';

export type FelvFivValue = 'No' | 'Pte' | 'Negativo' | 'Positivo (FELV)' | 'Positivo (FIV)';

export interface MedicalStatus {
  deworming: MedicalStatusValue; // Desparasitación
  felvFiv: FelvFivValue;         // Test FELV/FIV (Updated type)
  vaccination: MedicalStatusValue; // Vacunación
  microchip: MedicalStatusValue;   // Microchip
  sterilization: MedicalStatusValue; // Esterilización
}

export type AnimalStatus = 'En Adopción' | 'Reservado' | 'Reservada' | 'Urgente' | 'En residencia' | 'Busca acogida urgente' | 'Pronto en adopción' | 'Pendiente de Adopción' | 'Adoptado' | 'Adoptada';

export interface Animal {
  id: string;
  name: string;
  species: 'Perro' | 'Gato' | 'Otro';
  breed: string;
  age: string;
  gender: 'Macho' | 'Hembra';
  size: string;
  imageUrl: string;
  description: string;
  story: string;
  status: AnimalStatus;
  secondaryStatuses?: AnimalStatus[];
  medicalStatus?: MedicalStatus; // Optional, mainly for cats
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface DonationMethod {
  id: string;
  name: string;
  description: string;
  iconName: string; // We will map string to Lucide icon component
  actionUrl?: string;
  details?: string;
  note?: string;
  color: string;
}