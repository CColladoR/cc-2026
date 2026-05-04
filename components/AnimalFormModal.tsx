import React, { useState, useEffect } from 'react';
import { X, Save, AlertCircle } from 'lucide-react';
import { Animal, AnimalStatus, MedicalStatus, MedicalStatusValue, FelvFivValue } from '../types';

interface AnimalFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (animal: Animal) => void;
  initialData?: Animal | null;
}

const emptyMedicalStatus: MedicalStatus = {
  deworming: 'Pte',
  felvFiv: 'Pte',
  vaccination: 'Pte',
  microchip: 'Pte',
  sterilization: 'Pte'
};

const emptyAnimal: Animal = {
  id: '',
  name: '',
  species: 'Gato',
  breed: '',
  age: '',
  gender: 'Macho',
  size: 'Mediano',
  imageUrl: '',
  description: '',
  story: '',
  status: 'En Adopción',
  medicalStatus: emptyMedicalStatus
};

export const AnimalFormModal: React.FC<AnimalFormModalProps> = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState<Animal>(emptyAnimal);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setFormData({
            ...initialData,
            medicalStatus: initialData.medicalStatus || emptyMedicalStatus
        });
      } else {
        setFormData({ ...emptyAnimal, id: Date.now().toString() });
      }
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMedicalChange = (field: keyof MedicalStatus, value: string) => {
    setFormData(prev => ({
      ...prev,
      medicalStatus: {
        ...prev.medicalStatus!,
        [field]: value
      }
    }));
  };

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div className="fixed inset-0 bg-stone-900/75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white dark:bg-stone-900 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl w-full border border-stone-200 dark:border-stone-700">
          <div className="bg-white dark:bg-stone-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100" id="modal-title">
                    {initialData ? 'Editar Animal' : 'Añadir Nuevo Animal'}
                </h3>
                <button onClick={onClose} className="text-stone-400 hover:text-stone-500">
                    <X size={24} />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Nombre</label>
                        <input required name="name" value={formData.name} onChange={handleChange} className="w-full rounded-lg border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 p-2.5 text-sm focus:ring-primary focus:border-primary" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Especie</label>
                        <select name="species" value={formData.species} onChange={handleChange} className="w-full rounded-lg border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 p-2.5 text-sm">
                            <option value="Gato">Gato</option>
                            <option value="Perro">Perro</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Raza</label>
                        <input name="breed" value={formData.breed} onChange={handleChange} className="w-full rounded-lg border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 p-2.5 text-sm" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Edad</label>
                        <input name="age" value={formData.age} onChange={handleChange} className="w-full rounded-lg border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 p-2.5 text-sm" placeholder="Ej: 2 años" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Género</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} className="w-full rounded-lg border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 p-2.5 text-sm">
                            <option value="Macho">Macho</option>
                            <option value="Hembra">Hembra</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Estado</label>
                        <select name="status" value={formData.status} onChange={handleChange} className="w-full rounded-lg border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 p-2.5 text-sm font-bold text-teal-600">
                            <option value="En Adopción">En Adopción</option>
                            <option value="Urgente">Urgente</option>
                            <option value="Pronto en adopción">Pronto en adopción</option>
                            <option value="En residencia">En residencia</option>
                            <option value="Reservado">Reservado</option>
                            <option value="Reservada">Reservada</option>
                            <option value="Adoptado">Adoptado (Final Feliz)</option>
                            <option value="Adoptada">Adoptada (Final Feliz)</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">URL de la Imagen</label>
                    <input required name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full rounded-lg border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 p-2.5 text-sm" placeholder="https://..." />
                </div>

                <div>
                    <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Descripción Corta</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} rows={2} className="w-full rounded-lg border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 p-2.5 text-sm" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">Historia Completa</label>
                    <textarea name="story" value={formData.story} onChange={handleChange} rows={5} className="w-full rounded-lg border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 p-2.5 text-sm" />
                </div>

                {/* Medical Status */}
                <div className="bg-stone-50 dark:bg-stone-800/50 p-4 rounded-xl border border-stone-100 dark:border-stone-700">
                    <h4 className="font-bold text-stone-800 dark:text-stone-100 mb-3 flex items-center gap-2">
                        <AlertCircle size={16} /> Estado Veterinario
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(['deworming', 'vaccination', 'microchip', 'sterilization'] as const).map((key) => (
                            <div key={key}>
                                <label className="block text-xs font-bold uppercase text-stone-500 mb-1">{key === 'deworming' ? 'Desparasitación' : key === 'vaccination' ? 'Vacunación' : key === 'microchip' ? 'Microchip' : 'Esterilización'}</label>
                                <select 
                                    value={formData.medicalStatus?.[key] || 'Pte'} 
                                    onChange={(e) => handleMedicalChange(key, e.target.value)}
                                    className="w-full rounded-lg border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-2 text-xs"
                                >
                                    <option value="Sí">Sí</option>
                                    <option value="No">No</option>
                                    <option value="Pte">Pendiente</option>
                                </select>
                            </div>
                        ))}
                        <div>
                             <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Test FELV/FIV</label>
                             <select 
                                value={formData.medicalStatus?.felvFiv || 'Pte'} 
                                onChange={(e) => handleMedicalChange('felvFiv', e.target.value)}
                                className="w-full rounded-lg border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-2 text-xs"
                            >
                                <option value="Negativo">Negativo</option>
                                <option value="Positivo (FELV)">Positivo (FELV)</option>
                                <option value="Positivo (FIV)">Positivo (FIV)</option>
                                <option value="No">No realizado</option>
                                <option value="Pte">Pendiente</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                    <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-stone-600 dark:text-stone-400 font-medium hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
                        Cancelar
                    </button>
                    <button type="submit" className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold shadow-md flex items-center gap-2">
                        <Save size={18} />
                        Guardar Cambios
                    </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};