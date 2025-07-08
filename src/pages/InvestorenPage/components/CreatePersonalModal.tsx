import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

interface CreatePersonaModalProps {
    open: boolean;
    onCancel: () => void;
    onCreate: (values: any) => void;
    isCreating: boolean;
}

const FormRow: React.FC<{ label: string; name: string }> = ({ label, name }) => (
    <Form.Item name={name} className="!mb-4 w-full">
        <div className="flex items-center justify-between w-full">
            <label
                htmlFor={name}
                className="text-sm font-medium text-gray-700 w-[200px] flex-shrink-0"
            >
                {label}
            </label>
            <Input id={name} className="w-[200px]" />
        </div>
    </Form.Item>
);




const CreatePersonaModal: React.FC<CreatePersonaModalProps> = ({ open, onCancel, onCreate, isCreating }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                form.resetFields();
                onCreate(values);
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    return (
        <Modal
            open={open}
            onCancel={onCancel}
            closeIcon={<span className="text-white">X</span>} // Custom close icon
            centered
            footer={[
                <Button key="back" onClick={onCancel}>Cancel</Button>,
                <Button key="submit" type="primary" loading={isCreating} onClick={handleOk} className="!bg-[#005738] !hover:bg-[#00472e] !border-none !text-white flex items-center gap-2 px-4 py-2 rounded-[8px]"
                >
                    Create Request
                </Button>,
            ]}
            title={
                <div className="bg-[#005738] text-white -mx-6 -mt-5 mb-0 p-4 rounded-t-lg">
                    <h2 className="text-md font-bold">New Person</h2>
                </div>
            }
        >
            <Form form={form} layout="vertical" name="create_persona_form" className="!pt-6 space-y-4">
                <FormRow label="First name/Company name" name="firstName" />
                <FormRow label="Last name/Legal form" name="lastName" />
                <FormRow label="Street" name="street" />
                <FormRow label="Zip code" name="zip" />
                <FormRow label="Location" name="location" />
            </Form>
        </Modal>
    );
};

export default CreatePersonaModal;