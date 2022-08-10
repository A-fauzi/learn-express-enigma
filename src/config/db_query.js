const DbQuery = () => {
    const INSERT_BIODATA = `INSERT INTO master.biodata (first_name, last_name, dob, pob, address, marital_status)
                            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const UPDATE_BIODATA = `UPDATE master.biodata
                            set first_name = $1,
                                last_name  = $2,
                                dob        = $3,
                                pob        = $4,
                                address    = $5
                                marital_status    = $6
                            where id = $7`;
    const DELETE_BIODATA = `DELETE
                            FROM master.biodata
                            where id = $1`;
    const SELECT_BIODATA = `SELECT id, first_name, last_name, dob, pob, address, marital_status
                            from master.biodata
                            order by id desc `;
    const SELECT_BIODATA_ID = `SELECT first_name, last_name, dob, pob, address, marital_status
                               from master.biodata
                               where id = $1`;

    return {
        INSERT_BIODATA,
        UPDATE_BIODATA,
        DELETE_BIODATA,
        SELECT_BIODATA,
        SELECT_BIODATA_ID
    }
}

module.exports = DbQuery