DROP TABLE IF EXISTS public."address";
DROP TABLE IF EXISTS public."posting";
DROP TABLE IF EXISTS public."project_experience";
DROP TABLE IF EXISTS public."notification";
DROP TABLE IF EXISTS public."profile";
DROP TABLE IF EXISTS public."user";

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
);

CREATE TABLE public."profile"
(
    id bigint PRIMARY KEY NOT NULL,
    user_id bigint NOT NULL,
    name varchar(500) NOT NULL,
    phone_number varchar NULL,
    img_path varchar NOT NULL,
    img_name varchar NULL,
    create_at TIMESTAMP NOT NULL,
    update_at TIMESTAMP NULL
);

CREATE TABLE public."address"
(
    id bigint PRIMARY KEY NOT NULL,
    profile_id bigint NOT NULL,
    user_address_country varchar(500) NOT NULL,
    user_address_city varchar NULL,
    user_address_detail text NULL,
    create_at TIMESTAMP NOT NULL,
    update_at TIMESTAMP NULL
);

CREATE TABLE public."posting"
(
    id bigint PRIMARY KEY NOT NULL,
    user_id bigint NOT NULL,
    subject varchar(400) NOT NULL,
    content text NULL,
    create_at TIMESTAMP NOT NULL,
    update_at TIMESTAMP NULL
);

CREATE TABLE public."project_experience"
(
    id bigint PRIMARY KEY NOT NULL,
    user_id bigint NOT NULL,
    project_name varchar(500) NOT NULL,
    project_description text NOT NULL,
    project_git_url text NOT NULL,
    project_start date NOT NULL,
    project_end date NOT NULL,
    create_at TIMESTAMP NOT NULL,
    update_at TIMESTAMP NULL
);

CREATE TABLE public."notification"
(
    id bigint PRIMARY KEY NOT NULL,
    user_id bigint NOT NULL,
    user_from_id bigint NULL,
    type varchar(100) NOT NULL,
    title varchar(400) NOT NULL,
    content text NULL,
    read_at TIMESTAMP NULL,
    create_at TIMESTAMP NOT NULL,
    update_at TIMESTAMP NULL
);

ALTER TABLE public."user" OWNER to postgres;
ALTER TABLE public."profile" OWNER to postgres;
ALTER TABLE public."address" OWNER to postgres;
ALTER TABLE public."posting" OWNER to postgres;
ALTER TABLE public."project_experience" OWNER to postgres;
ALTER TABLE public."notification" OWNER to postgres;

ALTER TABLE public."profile"
ADD CONSTRAINT constraint_fk_profile
FOREIGN KEY (user_id)
REFERENCES public."user"(id)
ON DELETE CASCADE;

ALTER TABLE public."address"
ADD CONSTRAINT constraint_fk_address
FOREIGN KEY (profile_id)
REFERENCES public."profile"(id)
ON DELETE CASCADE;

ALTER TABLE public."posting"
ADD CONSTRAINT constraint_fk_posting
FOREIGN KEY (user_id)
REFERENCES public."user"(id)
ON DELETE CASCADE;

ALTER TABLE public."project_experience"
ADD CONSTRAINT constraint_fk_project_experience
FOREIGN KEY (user_id)
REFERENCES public."user"(id)
ON DELETE CASCADE;

ALTER TABLE public."notification"
ADD CONSTRAINT constraint_fk_notification
FOREIGN KEY (user_id)
REFERENCES public."user"(id)
ON DELETE CASCADE;
