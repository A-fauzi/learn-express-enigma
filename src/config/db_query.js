const DbQuery = () => {
    const INSERT_BIODATA = `INSERT INTO master.biodata (first_name, last_name, dob, pob, address)
                            VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const UPDATE_BIODATA = `UPDATE master.biodata
                            set first_name = $1,
                                last_name  = $2,
                                dob        = $3,
                                pob        = $4,
                                address    = $5
                            where id = $6`;
    const DELETE_BIODATA = `DELETE
                            FROM master.biodata
                            where id = $1`;
    const SELECT_BIODATA = `SELECT first_name, last_name, dob, pob, address
                            from master.biodata
                            order by id asc`;
    const SELECT_BIODATA_ID = `SELECT first_name, last_name, dob, pob, address
                               from master.biodata
                               where id = $1`;

    module.exports = {
        INSERT_BIODATA,
        UPDATE_BIODATA,
        DELETE_BIODATA,
        SELECT_BIODATA,
        SELECT_BIODATA_ID
    }
}