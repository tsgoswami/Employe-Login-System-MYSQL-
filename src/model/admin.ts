import db from './db';
import { User } from '../interfaces';
import { Tables } from '../configs/table.config';

export class AdminUserDB {
    constructor() {

    }

    public static getSuperUserByEmailId(email: string): Promise<User> {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM ${Tables.ADMIN} WHERE email = '${email}'`, (err, res) => {
                if (err) {
                    return reject(err);
                }
                if (res.length) {
                    return resolve(Object.assign({}, res[0]));
                }
                return resolve(null);
            });
        });
    }
}