import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index"

async function create() {
  const connection = await createConnection("localhost");

  await connection.query(
    `
    INSERT INTO CATEGORIES
    (
      id,
      name,
      created_at,
      updated_at
    )
    VALUES
    (
      '${uuidV4()}',
      'Bebidas',
      'now()',
      'now()'
    );

    INSERT INTO CATEGORIES
    (
      id,
      name,
      created_at,
      updated_at
    )
    VALUES
    (
      '${uuidV4()}',
      'Proteinas',
      'now()',
      'now()'
    );

    INSERT INTO CATEGORIES
    (
      id,
      name,
      created_at,
      updated_at
    )
    VALUES
    (
      '${uuidV4()}',
      'Produtos de Limpeza',
      'now()',
      'now()'
    );

    INSERT INTO CATEGORIES
    (
      id,
      name,
      created_at,
      updated_at
    )
    VALUES
    (
      '${uuidV4()}',
      'Embalagens',
      'now()',
      'now()'
    );

    INSERT INTO CATEGORIES
    (
      id,
      name,
      created_at,
      updated_at
    )
    VALUES
    (
      '${uuidV4()}',
      'Frutas',
      'now()',
      'now()'
    );

    INSERT INTO CATEGORIES
    (
      id,
      name,
      created_at,
      updated_at
    )
    VALUES
    (
      '${uuidV4()}',
      'Legumes',
      'now()',
      'now()'
    );
    `
  );
  await connection.close;
};

create().then(() => console.log("Units created!"));