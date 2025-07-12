import React from 'react';
import { Modal, Form, Input, Button, Select, Checkbox } from 'antd';
interface FieldConfig {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'number' | 'select' | 'checkbox';
    options?: { label: string; value: string | number }[]; // For select or checkbox
}
interface ModalProps {
    open: boolean;
    onCancel: () => void;
    onCreate: (values: any) => void;
    isCreating: boolean;
    title?: string;
    fields: FieldConfig[];
    submitButtonText?: string;
    submitButtonIcon?: React.ReactNode;
    submitButtonColorClass?: string;
}

const FormRow: React.FC<FieldConfig> = ({ label, name, type = 'text', options }) => {
    const isCheckbox = type === 'checkbox';
    const isSelect = type === 'select';

    return (
        <Form.Item
            name={name}
            valuePropName={isCheckbox ? 'checked' : 'value'} // important for checkbox
            className="!mb-4 w-full"
        >
            <div className={`flex items-center justify-between w-full ${isCheckbox ? 'justify-start' : ''}`}>
                <label
                    htmlFor={name}
                    className="text-sm font-medium text-gray-700 w-[200px] flex-shrink-0"
                >
                    {label}
                </label>

                {isCheckbox ? (
                    <Checkbox id={name} />
                ) : isSelect ? (
                    <Select id={name} className="w-[200px]" options={options} />
                ) : (
                    <Input id={name} className="w-[200px]" type={type} />
                )}
            </div>
        </Form.Item>
    );
};

const CommonModal: React.FC<ModalProps> = ({
    open,
    onCancel,
    onCreate,
    isCreating,
    title = 'New Entry',
    fields,
    submitButtonText,
    submitButtonIcon,
    submitButtonColorClass
}) => {
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
            closeIcon={<span className="text-white">X</span>}
            centered
            footer={
                <div className="flex justify-center">
                    <Button
                        key="submit"
                        type="primary"
                        loading={isCreating}
                        onClick={handleOk}
                        className={`flex items-center gap-2 px-4 py-2 rounded-[8px] border-none text-white ${submitButtonColorClass || '!bg-[#005738] hover:!bg-[#00472e]'}`}
                    >
                        {submitButtonIcon}
                        {submitButtonText || 'Submit'}
                    </Button>
                </div>
            }

            title={
                <div className="bg-[#005738] text-white -mx-6 -mt-5 mb-0 p-4 rounded-t-lg">
                    <h2 className="text-md font-bold">{title}</h2>
                </div>
            }
        >
            <Form form={form} layout="vertical" name="common_modal_form" className="!pt-6 space-y-4">
                {fields.map((field) => (
                    <FormRow key={field.name} {...field} />
                ))}
            </Form>
        </Modal>
    );
};

export default CommonModal;
