import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { SAVE_STOCK } from "../utils/mutations";

const AppleBuyerForm = () => {

const [saveStock, { error }] = useMutation(SAVE_STOCK);

const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
        const {data}= await saveStock({
//            variables: {ticker: 'APPL', name: 'Apple'}
            variables: {stockData: {ticker: 'APPL', name: 'Apple'}}
        })
        // setSavedStockIds([...savedStockIds, stockToSave.stockId]);
      } catch (err) {
        console.error(err);
        
      }
};

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
          <Form.Control
            type="text"
            placeholder="Search Stock"
            name="stockSearch"
            // onChange={handleInputChange}
            // value={userFormData.stock}
            required
          />
        <Button type="submit" variant="success" size="lg">
         Save Ticker
        </Button>
      </Form>
    </>
  );
}

export default AppleBuyerForm;
