const client = require("../connection/connection");
// app.post("/insertEmpoyee", (req, res) => {
//     const user = req.body;
//     let insertQuery = `insert into employee(emp_id,name, email,hiredate,salary,dept_id) 
//                          values(${user.emp_id}, '${user.name}', '${user.email}','${user.hiredate}','${user.salary}','${user.dept_id}')`;
//     console.log(insertQuery);
//     client.query(insertQuery, (err, result) => {
//       if (!err) {
//         res.send("Insertion was successful");
//       } else {
//         console.log(err.message);
//       }
//     });
//     client.end;
//   });
  
// app.post("/insertDepartment", (req, res) => {
//     const user = req.body;
//     let insertQuery = `insert into department(dept_id,dept_name) 
//                          values('${user.dept_id}', '${user.dept_name}')`;
//     console.log(insertQuery);
//     client.query(insertQuery, (err, result) => {
//       if (!err) {
//         res.send("Insertion was successful");
//       } else {
//         console.log(err.message);
//       }
//     });
//     client.end;
//   });
  
  exports.getAllEmploye= async (req, res) => {
    const query = `SELECT COUNT(*) AS "number of employee" FROM "employee"`;
    try {
      const { rows } = await client.query(query);
      res.status(200).send(rows);
      data=rows
      console.log(rows);
    } catch (error) {
      console.error(error.stack);
    } finally {
      await client.end();
    }
  };
  
  
//   app.get("/hireDate", async (req, res) => {
//     let data = req.body;
//     const query = `SELECT * 
//                      FROM "employee" 
//                      JOIN "department" ON "department"."dept_id" = "employee"."dept_id" WHERE ${
//                        (data.hiredate, "true")
//                      }`;
//     console.log(query);
//     try {
//       const { rows } = await client.query(query);
//       res.status(200).json(rows);
//       console.table(rows);
//     } catch (error) {
//       console.error(error.stack);
//     } finally {
//       await client.end();
//     }
//   });
  