

import { Form, Input, Modal } from 'antd';
import React from 'react';

const MakeOfferModal = ({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) => {
    return (
        <Modal open={open} onCancel={() => setOpen(false)} centered width={500} footer={false} >

            <p className='text-center text-[25px] font-bold pb-4'> Make an offer </p>

            <Form layout='vertical' className=''> 

            <Form.Item
      name="price"
      rules={[
        {
          required: true,
          message: `This field is required`,
        },
      ]} 
      label={<p className='text-[14px] font-normal '>Offer your price</p>}
    > 

      <Input
        placeholder={`AED 45.00`}
        style={{
            height: 50,
            border: "1px solid #d9d9d9",
            outline: "none",
            boxShadow: "none",
            backgroundColor: "white",
            borderRadius: "40px",
          }}
      />

    </Form.Item> 

                <Form.Item>
                    <button
                        type="submit"
                        className="w-full h-[55px] rounded-full text-white font-normal text-[16px] bg-primary  flex items-center justify-center  uppercase"
                    >
                        Make an offer
                    </button>
                </Form.Item>
            </Form>

        </Modal>
    );
};

export default MakeOfferModal;