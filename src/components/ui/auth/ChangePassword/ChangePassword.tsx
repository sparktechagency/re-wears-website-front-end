"use client"
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react"; 

const ChangePassword = () => { 
        const router = useRouter()
    
        const onFinish = async(values:{newPassword:string , confirmPassword:string}) => { 
          console.log(values);
          router.push(`/confirm-change-password`);
        };  
    return (
        <div className="  lg:w-[600px] w-full">

        <div className=" mb-6">
          <h1 className=" text-secondary text-[25px] font-bold   text-center ">Change password</h1> 

        </div>

        <Form
          layout="vertical"
          onFinish={onFinish}
        >

            <Form.Item
              name="newPassword" 
              label={ <p
                style={{
                  display: "block",
                  color: "#5C5C5C",
                }}
              
                className="font-semibold "
              >
                New Password
              </p>}
              rules={[
                {
                  required: true,
                  message: "Please input your new Password!",
                },
              ]}
              style={{ marginBottom: 0 }}
            >
              <Input.Password
                type="password"
                placeholder="Enter New password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "60px",
                  outline: "none",
                }} 
                className="mb-6"
              />
            </Form.Item>       
           
            <Form.Item
              style={{ marginBottom: 0 }} 
              label={ <p
                style={{
                  display: "block",
                  color: "#5C5C5C",
                }}
                className="font-semibold"
              >
                Confirm Password
              </p>}
              name="confirmPassword"
              dependencies={["newPassword"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Re-enter your new password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The new password that you entered do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter Confirm password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "60px",
                  outline: "none",
                }} 
                className="mb-6"
              />
            </Form.Item>
      

            <Form.Item style={{marginBottom: 0}}>
            <Button
              htmlType="submit"
              style={{
                width: '100%',
                height: 55,
                color: "white",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#9D977A",
                marginTop: 20 , 
                borderRadius: "60px",
              }}
            >
             Submit
            </Button>
          </Form.Item>


         
        </Form>


    </div>
    );
};

export default ChangePassword;