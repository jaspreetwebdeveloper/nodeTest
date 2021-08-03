import { Request, Response } from 'express';
import { Contact } from '../model/contact';
import { addData, getData, randomId } from "../services/common";

export async function addContact(req: Request, res: Response) {
    const _contact = getData();
    const newContact: Contact = req.body;
    if (newContact.firstName == null || newContact.contact == null || newContact.address == null) {
        return res.status(401).send({ error: true, msg: 'Data missing' })
    }
    newContact._id = randomId();
    _contact.push(newContact)
    addData(_contact);
    res.send({ success: true, msg: 'Contact Added successfully', data: newContact })
}

export async function getContactDetails(req: Request, res: Response) {
    const findData = getData();
    let _getData = await findData.find((user: any) => user._id === req.body._id)
    res.send({ success: true, msg: "Contact Details", data: _getData })
}