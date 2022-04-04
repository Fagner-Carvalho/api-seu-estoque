import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index"

async function create() {
  const connection = await createConnection("localhost");

  await connection.query(
    `
    INSERT INTO UNIT_MEASURES
    (
      id,
      name,
      abbreviation,
      created_at,
      updated_at
    )
    VALUES
    (
      '${uuidV4()}',
      'Unidade',
      'un',
      'now()',
      'now()'
    );

    INSERT INTO UNIT_MEASURES
    (
      id,
      name,
      abbreviation,
      created_at,
      updated_at
    )
    VALUES
    (
      '${uuidV4()}',
      'Litro',
      'l',
      'now()',
      'now()'
    );

    INSERT INTO UNIT_MEASURES
    (
      id,
      name,
      abbreviation,
      created_at,
      updated_at
    )
    VALUES
    (
      '${uuidV4()}',
      'Quilograma',
      'kg',
      'now()',
      'now()'
    );
    `
  );
  await connection.close;
};

create().then(() => console.log("Categories created!"));