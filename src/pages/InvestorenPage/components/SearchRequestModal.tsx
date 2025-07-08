import React from 'react';
import { Modal, Form, Input, InputNumber, Button } from 'antd';

const { TextArea } = Input;

interface SearchRequestModalProps {
    open: boolean;
    investorName: string;
    onCancel: () => void;
    onCreate: (values: any) => void;
    isCreating: boolean;
}

const FormRow: React.FC<{ label: React.ReactNode; children: React.ReactNode; labelClass?: string }> = ({ label, children, labelClass }) => (
    <div className="grid grid-cols-[1fr_2fr] items-start gap-4">
        <label className={`pt-1 text-sm font-medium ${labelClass || 'text-brand-text-light'}`}>{label}</label>
        {children}
    </div>
);

const SearchRequestModal: React.FC<SearchRequestModalProps> = ({ open, investorName, onCancel, onCreate, isCreating }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields()
            .then(values => {
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
            title={
                <div className="bg-[#005738] text-white -mx-6 -mt-5 mb-0 p-4 rounded-t-lg">
                    <h2 className="text-md font-bold">Search Request</h2>
                </div>
            }
            footer={[
                <Button key="back" onClick={onCancel}>Cancel</Button>,
                <Button key="submit" type="primary" loading={isCreating} onClick={handleOk} className="!bg-[#005738] !hover:bg-[#00472e] !border-none !text-white flex items-center gap-2 px-4 py-2 rounded-[8px]"
                >
                    Create
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical" name="search_request_form" className="!pt-6 space-y-4">
                <FormRow label="Investor">
                    <Input value={investorName} disabled />
                </FormRow>

                <FormRow label="System size" labelClass="text-black cursor-pointer">
                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <span className="w-12">from</span>
                            <Form.Item name="size_from" noStyle>
                                <InputNumber className="w-full" formatter={(value) => `${value} €`} parser={(value) => value!.replace(' €', '')} />
                            </Form.Item>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-12">to</span>
                            <Form.Item name="size_to" noStyle>
                                <InputNumber className="w-full" formatter={(value) => `${value} €`} parser={(value) => value!.replace(' €', '')} />
                            </Form.Item>
                        </div>
                    </div>
                </FormRow>

                <FormRow label="Note" labelClass="text-brand-green">
                    <Form.Item name="note" noStyle>
                        <TextArea rows={4} />
                    </Form.Item>
                </FormRow>
            </Form>
        </Modal>
    );
};

export default SearchRequestModal;