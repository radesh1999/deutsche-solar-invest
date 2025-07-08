import React, { useState } from 'react';
import { Modal, Select, Button } from 'antd';
import { ReserveInvest } from '../assets/images';

// Mock data for the dropdowns
const investors = [
    { id: '1', name: 'Heinz Möller' },
    { id: '2', name: 'Sabine Schmidt' },
    { id: '3', name: 'Klaus Meier' },
];

const personas = [
    { id: '1', name: 'Sunflow GbR' },
    { id: '2', name: 'Private Investor' },
    { id: '3', name: 'Solaris GmbH' },
];

// Define the data structure for the callback
export interface ContractCreationData {
    investorId: string | undefined;
    personaId: string | undefined;
}

// Define the component's props
interface ContractCreationModalProps {
    open: boolean;
    onCancel: () => void;
    onCreate: (data: ContractCreationData) => void;
    isCreating: boolean; // To show a loading state on the button
}

const ModalPopup: React.FC<ContractCreationModalProps> = ({
    open,
    onCancel,
    onCreate,
    isCreating,
}) => {
    const [selectedInvestor, setSelectedInvestor] = useState<string | undefined>(investors[0]?.id);
    const [selectedPersona, setSelectedPersona] = useState<string | undefined>(personas[0]?.id);

    const handleCreateClick = () => {
        onCreate({
            investorId: selectedInvestor,
            personaId: selectedPersona,
        });
    };

    return (
        <Modal
            open={open}
            onCancel={onCancel}
            closeIcon={<span className="text-white">X</span>} // Custom close icon
            centered
            footer={null} // We use a custom footer/button
            title={
                // Custom styled title to match the design
                <div className="bg-[#005738] text-white -mx-6 -mt-5 mb-0 p-4 rounded-t-lg">
                    <h2 className="text-xl font-bold">Contract creation</h2>
                </div>
            }
        >
            <div className="space-y-5 p-5">
                {/* Investor Row */}
                <div className="flex items-center">
                    <label className="w-20 text-brand-text-dark font-medium">Investor</label>
                    <Select
                        className="flex-1"
                        value={selectedInvestor}
                        onChange={setSelectedInvestor}
                        options={investors.map(inv => ({ value: inv.id, label: inv.name }))}
                    />
                </div>

                {/* Persona Row */}
                <div className="flex items-center">
                    <label className="w-20 text-brand-text-dark font-medium">Persona</label>
                    <Select
                        className="flex-1"
                        value={selectedPersona}
                        onChange={setSelectedPersona}
                        options={personas.map(p => ({ value: p.id, label: p.name }))}
                    />
                </div>
            </div>

            {/* Information Text */}
            <p className="text-sm text-brand-text-light mt-1 mb-8 p-5">
                When these contracts are created, mails containing the purchase and service contracts are
                automatically sent to the following parties: Investor, Broker, DSI, Project developer
            </p>

            {/* Custom Action Button */}
            <div className="text-center">
                <Button
                    type="primary"
                    size="large"
                    loading={isCreating}
                    onClick={handleCreateClick}
                    className="!bg-[#F4CB4D] !hover:bg-[#e0b03c] !border-none !text-white flex items-center gap-2 px-4 py-2 rounded-[8px]"
                    icon={<img src={ReserveInvest} alt="Create Contract" />}
                >
                    Create contracts
                </Button>
            </div>
        </Modal>
    );
};

export default ModalPopup;