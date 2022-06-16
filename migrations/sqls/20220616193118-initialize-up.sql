CREATE TABLE public."user"
(
    id bigint PRIMARY KEY NOT NULL,
    username varchar NOT NULL,
    password varchar NOT NULL,
    email varchar NOT NULL,
    verification boolean NULL,
    hash varchar NULL,
    role varchar NULL,
    create_at TIMESTAMP NOT NULL,
    update_at TIMESTAMP NULL,
    delete_at TIMESTAMP NULL
)

TABLESPACE pg_default;

ALTER TABLE public."user" OWNER to postgres;