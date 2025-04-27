--
-- PostgreSQL database dump
--

-- Dumped from database version 16.8 (Ubuntu 16.8-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.8 (Ubuntu 16.8-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: active_storage_attachments; Type: TABLE; Schema: public; Owner: postgresql
--

CREATE TABLE public.active_storage_attachments (
    id bigint NOT NULL,
    name character varying NOT NULL,
    record_type character varying NOT NULL,
    record_id bigint NOT NULL,
    blob_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.active_storage_attachments OWNER TO postgresql;

--
-- Name: active_storage_attachments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgresql
--

CREATE SEQUENCE public.active_storage_attachments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.active_storage_attachments_id_seq OWNER TO postgresql;

--
-- Name: active_storage_attachments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgresql
--

ALTER SEQUENCE public.active_storage_attachments_id_seq OWNED BY public.active_storage_attachments.id;


--
-- Name: active_storage_blobs; Type: TABLE; Schema: public; Owner: postgresql
--

CREATE TABLE public.active_storage_blobs (
    id bigint NOT NULL,
    key character varying NOT NULL,
    filename character varying NOT NULL,
    content_type character varying,
    metadata text,
    service_name character varying NOT NULL,
    byte_size bigint NOT NULL,
    checksum character varying,
    created_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.active_storage_blobs OWNER TO postgresql;

--
-- Name: active_storage_blobs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgresql
--

CREATE SEQUENCE public.active_storage_blobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.active_storage_blobs_id_seq OWNER TO postgresql;

--
-- Name: active_storage_blobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgresql
--

ALTER SEQUENCE public.active_storage_blobs_id_seq OWNED BY public.active_storage_blobs.id;


--
-- Name: active_storage_variant_records; Type: TABLE; Schema: public; Owner: postgresql
--

CREATE TABLE public.active_storage_variant_records (
    id bigint NOT NULL,
    blob_id bigint NOT NULL,
    variation_digest character varying NOT NULL
);


ALTER TABLE public.active_storage_variant_records OWNER TO postgresql;

--
-- Name: active_storage_variant_records_id_seq; Type: SEQUENCE; Schema: public; Owner: postgresql
--

CREATE SEQUENCE public.active_storage_variant_records_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.active_storage_variant_records_id_seq OWNER TO postgresql;

--
-- Name: active_storage_variant_records_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgresql
--

ALTER SEQUENCE public.active_storage_variant_records_id_seq OWNED BY public.active_storage_variant_records.id;


--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: postgresql
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.ar_internal_metadata OWNER TO postgresql;

--
-- Name: feedbacks; Type: TABLE; Schema: public; Owner: postgresql
--

CREATE TABLE public.feedbacks (
    id bigint NOT NULL,
    message text,
    author_id bigint NOT NULL,
    recipient_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    rating integer
);


ALTER TABLE public.feedbacks OWNER TO postgresql;

--
-- Name: feedbacks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgresql
--

CREATE SEQUENCE public.feedbacks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.feedbacks_id_seq OWNER TO postgresql;

--
-- Name: feedbacks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgresql
--

ALTER SEQUENCE public.feedbacks_id_seq OWNED BY public.feedbacks.id;


--
-- Name: images; Type: TABLE; Schema: public; Owner: postgresql
--

CREATE TABLE public.images (
    id bigint NOT NULL,
    image_url character varying,
    rental_property_id bigint,
    rental_application_id bigint,
    uploaded_by_id integer NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.images OWNER TO postgresql;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: postgresql
--

CREATE SEQUENCE public.images_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.images_id_seq OWNER TO postgresql;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgresql
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: rental_applications; Type: TABLE; Schema: public; Owner: postgresql
--

CREATE TABLE public.rental_applications (
    id bigint NOT NULL,
    status character varying,
    user_id bigint NOT NULL,
    rental_property_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    first_name character varying,
    last_name character varying,
    age integer,
    current_address character varying,
    province character varying,
    city character varying,
    country character varying,
    employment_status character varying,
    employer_name character varying,
    years_working_at_employer integer,
    payment_type character varying,
    property_id integer,
    phone_number character varying,
    email character varying,
    income integer,
    "references" text,
    employer character varying,
    monthly_income integer
);


ALTER TABLE public.rental_applications OWNER TO postgresql;

--
-- Name: rental_applications_id_seq; Type: SEQUENCE; Schema: public; Owner: postgresql
--

CREATE SEQUENCE public.rental_applications_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rental_applications_id_seq OWNER TO postgresql;

--
-- Name: rental_applications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgresql
--

ALTER SEQUENCE public.rental_applications_id_seq OWNED BY public.rental_applications.id;


--
-- Name: rental_properties; Type: TABLE; Schema: public; Owner: postgresql
--

CREATE TABLE public.rental_properties (
    id bigint NOT NULL,
    title character varying,
    description text,
    address character varying,
    sq_feet integer,
    bedrooms integer,
    bathrooms integer,
    property_types character varying,
    fees numeric,
    utilities_included boolean,
    user_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    latitude double precision,
    longitude double precision
);


ALTER TABLE public.rental_properties OWNER TO postgresql;

--
-- Name: rental_properties_id_seq; Type: SEQUENCE; Schema: public; Owner: postgresql
--

CREATE SEQUENCE public.rental_properties_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rental_properties_id_seq OWNER TO postgresql;

--
-- Name: rental_properties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgresql
--

ALTER SEQUENCE public.rental_properties_id_seq OWNED BY public.rental_properties.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: postgresql
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO postgresql;

--
-- Name: subscriptions; Type: TABLE; Schema: public; Owner: postgresql
--

CREATE TABLE public.subscriptions (
    id bigint NOT NULL,
    plan character varying,
    active boolean,
    user_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.subscriptions OWNER TO postgresql;

--
-- Name: subscriptions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgresql
--

CREATE SEQUENCE public.subscriptions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.subscriptions_id_seq OWNER TO postgresql;

--
-- Name: subscriptions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgresql
--

ALTER SEQUENCE public.subscriptions_id_seq OWNED BY public.subscriptions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgresql
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying DEFAULT ''::character varying NOT NULL,
    encrypted_password character varying DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying,
    reset_password_sent_at timestamp(6) without time zone,
    remember_created_at timestamp(6) without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    first_name character varying,
    last_name character varying,
    role integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.users OWNER TO postgresql;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgresql
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgresql;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgresql
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: active_storage_attachments id; Type: DEFAULT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.active_storage_attachments ALTER COLUMN id SET DEFAULT nextval('public.active_storage_attachments_id_seq'::regclass);


--
-- Name: active_storage_blobs id; Type: DEFAULT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.active_storage_blobs ALTER COLUMN id SET DEFAULT nextval('public.active_storage_blobs_id_seq'::regclass);


--
-- Name: active_storage_variant_records id; Type: DEFAULT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.active_storage_variant_records ALTER COLUMN id SET DEFAULT nextval('public.active_storage_variant_records_id_seq'::regclass);


--
-- Name: feedbacks id; Type: DEFAULT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.feedbacks ALTER COLUMN id SET DEFAULT nextval('public.feedbacks_id_seq'::regclass);


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: rental_applications id; Type: DEFAULT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.rental_applications ALTER COLUMN id SET DEFAULT nextval('public.rental_applications_id_seq'::regclass);


--
-- Name: rental_properties id; Type: DEFAULT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.rental_properties ALTER COLUMN id SET DEFAULT nextval('public.rental_properties_id_seq'::regclass);


--
-- Name: subscriptions id; Type: DEFAULT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.subscriptions ALTER COLUMN id SET DEFAULT nextval('public.subscriptions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: active_storage_attachments; Type: TABLE DATA; Schema: public; Owner: postgresql
--

COPY public.active_storage_attachments (id, name, record_type, record_id, blob_id, created_at) FROM stdin;
\.


--
-- Data for Name: active_storage_blobs; Type: TABLE DATA; Schema: public; Owner: postgresql
--

COPY public.active_storage_blobs (id, key, filename, content_type, metadata, service_name, byte_size, checksum, created_at) FROM stdin;
\.


--
-- Data for Name: active_storage_variant_records; Type: TABLE DATA; Schema: public; Owner: postgresql
--

COPY public.active_storage_variant_records (id, blob_id, variation_digest) FROM stdin;
\.


--
-- Data for Name: ar_internal_metadata; Type: TABLE DATA; Schema: public; Owner: postgresql
--

COPY public.ar_internal_metadata (key, value, created_at, updated_at) FROM stdin;
environment	development	2025-04-26 22:45:36.962553	2025-04-26 22:45:36.962555
\.


--
-- Data for Name: feedbacks; Type: TABLE DATA; Schema: public; Owner: postgresql
--

COPY public.feedbacks (id, message, author_id, recipient_id, created_at, updated_at, rating) FROM stdin;
1	Great communication and timely responses!	11	12	2025-04-27 14:04:28.307934	2025-04-27 14:04:28.307934	4
2	Very respectful and clean tenant.	12	11	2025-04-27 14:04:28.311552	2025-04-27 14:04:28.311552	5
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: postgresql
--

COPY public.images (id, image_url, rental_property_id, rental_application_id, uploaded_by_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: rental_applications; Type: TABLE DATA; Schema: public; Owner: postgresql
--

COPY public.rental_applications (id, status, user_id, rental_property_id, created_at, updated_at, first_name, last_name, age, current_address, province, city, country, employment_status, employer_name, years_working_at_employer, payment_type, property_id, phone_number, email, income, "references", employer, monthly_income) FROM stdin;
2	\N	14	7	2025-04-27 14:04:28.296516	2025-04-27 14:04:28.296516	Alice	Smith	28	123 Main Street	BC	Vancouver	Canada	Employed	DevCo Ltd.	2	Credit	\N	\N	\N	\N	\N	\N	\N
3	\N	14	8	2025-04-27 14:04:28.300243	2025-04-27 14:04:28.300243	Bob	Johnson	35	456 Elm Street	ON	Toronto	Canada	Self-Employed	Bob's Plumbing	5	Credit	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: rental_properties; Type: TABLE DATA; Schema: public; Owner: postgresql
--

COPY public.rental_properties (id, title, description, address, sq_feet, bedrooms, bathrooms, property_types, fees, utilities_included, user_id, created_at, updated_at, latitude, longitude) FROM stdin;
7	Sunny Apartment Downtown	Bright and spacious downtown apartment.	100 Main St, Cityville	900	2	1	Apartment	1500.0	t	15	2025-04-27 14:04:26.41628	2025-04-27 14:04:26.41628	\N	\N
8	Cozy Suburban House	Family home with a backyard.	200 Maple Ave, Suburbia	1800	3	2	House	2400.0	f	15	2025-04-27 14:04:27.22187	2025-04-27 14:04:27.22187	\N	\N
9	Modern Studio Loft	Stylish loft close to amenities.	300 King St, Uptown	600	1	1	Studio	1200.0	t	15	2025-04-27 14:04:28.282359	2025-04-27 14:04:28.282359	43.8393384	-66.1119438
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: postgresql
--

COPY public.schema_migrations (version) FROM stdin;
20250329190650
20250329190728
20250405010305
20250405155008
20250406160847
20250406163950
20250406171640
20250408230404
20250409231305
20250412010938
20250412012226
20250412012432
20250412013516
20250412013830
20250415002502
20250416025106
20250426214058
\.


--
-- Data for Name: subscriptions; Type: TABLE DATA; Schema: public; Owner: postgresql
--

COPY public.subscriptions (id, plan, active, user_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgresql
--

COPY public.users (id, email, encrypted_password, reset_password_token, reset_password_sent_at, remember_created_at, created_at, updated_at, first_name, last_name, role) FROM stdin;
11	admin@example.com	$2a$12$a8rtfL1k0eje3Nwa0qH9XOeMbHqhe0bKMCRYwIlzbQzRQaoRJAgIa	\N	\N	\N	2025-04-27 14:04:25.369185	2025-04-27 14:04:25.369185	Admin	User	1
12	jane.doe@example.com	$2a$12$2ua6JLNpxSMwpcX8uYzYruQq7SbP61go76SzPNqob0K/SS0gQ9pCm	\N	\N	\N	2025-04-27 14:04:25.494356	2025-04-27 14:04:25.494356	Jane	Doe	0
13	john.smith@example.com	$2a$12$Cgyo8tkMbcXe7kdhd7U02O0E3ZpD5A.QK27sfeXyHZd6aVzuuEH2S	\N	\N	\N	2025-04-27 14:04:25.620554	2025-04-27 14:04:25.620554	John	Smith	0
14	demo@example.com	$2a$12$Y6Qpb5mdxAHIHkrttVwyeOo6plY9OerxGMgnO3gRgfXrvFyGkBgXy	\N	\N	\N	2025-04-27 14:04:25.745865	2025-04-27 14:04:25.745865	Demo	User	0
15	landlord@example.com	$2a$12$aWWnsctiZ1gurGM03ik1zOEOCQg9AvqXQ60oOWG3QaWlbnutOc6PO	\N	\N	\N	2025-04-27 14:04:25.870705	2025-04-27 14:04:25.870705	Landlord	Example	1
\.


--
-- Name: active_storage_attachments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgresql
--

SELECT pg_catalog.setval('public.active_storage_attachments_id_seq', 2, true);


--
-- Name: active_storage_blobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgresql
--

SELECT pg_catalog.setval('public.active_storage_blobs_id_seq', 2, true);


--
-- Name: active_storage_variant_records_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgresql
--

SELECT pg_catalog.setval('public.active_storage_variant_records_id_seq', 1, false);


--
-- Name: feedbacks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgresql
--

SELECT pg_catalog.setval('public.feedbacks_id_seq', 2, true);


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgresql
--

SELECT pg_catalog.setval('public.images_id_seq', 1, false);


--
-- Name: rental_applications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgresql
--

SELECT pg_catalog.setval('public.rental_applications_id_seq', 3, true);


--
-- Name: rental_properties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgresql
--

SELECT pg_catalog.setval('public.rental_properties_id_seq', 9, true);


--
-- Name: subscriptions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgresql
--

SELECT pg_catalog.setval('public.subscriptions_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgresql
--

SELECT pg_catalog.setval('public.users_id_seq', 15, true);


--
-- Name: active_storage_attachments active_storage_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.active_storage_attachments
    ADD CONSTRAINT active_storage_attachments_pkey PRIMARY KEY (id);


--
-- Name: active_storage_blobs active_storage_blobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.active_storage_blobs
    ADD CONSTRAINT active_storage_blobs_pkey PRIMARY KEY (id);


--
-- Name: active_storage_variant_records active_storage_variant_records_pkey; Type: CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.active_storage_variant_records
    ADD CONSTRAINT active_storage_variant_records_pkey PRIMARY KEY (id);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: feedbacks feedbacks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.feedbacks
    ADD CONSTRAINT feedbacks_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: rental_applications rental_applications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.rental_applications
    ADD CONSTRAINT rental_applications_pkey PRIMARY KEY (id);


--
-- Name: rental_properties rental_properties_pkey; Type: CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.rental_properties
    ADD CONSTRAINT rental_properties_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: subscriptions subscriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: index_active_storage_attachments_on_blob_id; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE INDEX index_active_storage_attachments_on_blob_id ON public.active_storage_attachments USING btree (blob_id);


--
-- Name: index_active_storage_attachments_uniqueness; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE UNIQUE INDEX index_active_storage_attachments_uniqueness ON public.active_storage_attachments USING btree (record_type, record_id, name, blob_id);


--
-- Name: index_active_storage_blobs_on_key; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE UNIQUE INDEX index_active_storage_blobs_on_key ON public.active_storage_blobs USING btree (key);


--
-- Name: index_active_storage_variant_records_uniqueness; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE UNIQUE INDEX index_active_storage_variant_records_uniqueness ON public.active_storage_variant_records USING btree (blob_id, variation_digest);


--
-- Name: index_feedbacks_on_author_id; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE INDEX index_feedbacks_on_author_id ON public.feedbacks USING btree (author_id);


--
-- Name: index_feedbacks_on_recipient_id; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE INDEX index_feedbacks_on_recipient_id ON public.feedbacks USING btree (recipient_id);


--
-- Name: index_images_on_rental_application_id; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE INDEX index_images_on_rental_application_id ON public.images USING btree (rental_application_id);


--
-- Name: index_images_on_rental_property_id; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE INDEX index_images_on_rental_property_id ON public.images USING btree (rental_property_id);


--
-- Name: index_rental_applications_on_rental_property_id; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE INDEX index_rental_applications_on_rental_property_id ON public.rental_applications USING btree (rental_property_id);


--
-- Name: index_rental_applications_on_user_id; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE INDEX index_rental_applications_on_user_id ON public.rental_applications USING btree (user_id);


--
-- Name: index_rental_properties_on_user_id; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE INDEX index_rental_properties_on_user_id ON public.rental_properties USING btree (user_id);


--
-- Name: index_subscriptions_on_user_id; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE INDEX index_subscriptions_on_user_id ON public.subscriptions USING btree (user_id);


--
-- Name: index_users_on_email; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE UNIQUE INDEX index_users_on_email ON public.users USING btree (email);


--
-- Name: index_users_on_reset_password_token; Type: INDEX; Schema: public; Owner: postgresql
--

CREATE UNIQUE INDEX index_users_on_reset_password_token ON public.users USING btree (reset_password_token);


--
-- Name: feedbacks fk_rails_32948ab628; Type: FK CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.feedbacks
    ADD CONSTRAINT fk_rails_32948ab628 FOREIGN KEY (recipient_id) REFERENCES public.users(id);


--
-- Name: rental_applications fk_rails_4d28775bbd; Type: FK CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.rental_applications
    ADD CONSTRAINT fk_rails_4d28775bbd FOREIGN KEY (rental_property_id) REFERENCES public.rental_properties(id);


--
-- Name: images fk_rails_67ac5970f5; Type: FK CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT fk_rails_67ac5970f5 FOREIGN KEY (rental_application_id) REFERENCES public.rental_applications(id);


--
-- Name: feedbacks fk_rails_82ee156043; Type: FK CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.feedbacks
    ADD CONSTRAINT fk_rails_82ee156043 FOREIGN KEY (author_id) REFERENCES public.users(id);


--
-- Name: rental_properties fk_rails_830c9e074d; Type: FK CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.rental_properties
    ADD CONSTRAINT fk_rails_830c9e074d FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: subscriptions fk_rails_933bdff476; Type: FK CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT fk_rails_933bdff476 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: active_storage_variant_records fk_rails_993965df05; Type: FK CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.active_storage_variant_records
    ADD CONSTRAINT fk_rails_993965df05 FOREIGN KEY (blob_id) REFERENCES public.active_storage_blobs(id);


--
-- Name: images fk_rails_9c3ce51b63; Type: FK CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT fk_rails_9c3ce51b63 FOREIGN KEY (rental_property_id) REFERENCES public.rental_properties(id);


--
-- Name: images fk_rails_a4e270f11a; Type: FK CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT fk_rails_a4e270f11a FOREIGN KEY (uploaded_by_id) REFERENCES public.users(id);


--
-- Name: active_storage_attachments fk_rails_c3b3935057; Type: FK CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.active_storage_attachments
    ADD CONSTRAINT fk_rails_c3b3935057 FOREIGN KEY (blob_id) REFERENCES public.active_storage_blobs(id);


--
-- Name: rental_applications fk_rails_e257d0e090; Type: FK CONSTRAINT; Schema: public; Owner: postgresql
--

ALTER TABLE ONLY public.rental_applications
    ADD CONSTRAINT fk_rails_e257d0e090 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

