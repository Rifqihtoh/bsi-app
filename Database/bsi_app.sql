PGDMP          
    	        |            bsi_app    16.1    16.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16407    bsi_app    DATABASE     �   CREATE DATABASE bsi_app WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE bsi_app;
                postgres    false            �            1259    16427    transaction    TABLE     �   CREATE TABLE public.transaction (
    id integer NOT NULL,
    wallet_id integer,
    name character varying,
    description character varying,
    amount integer,
    type character varying
);
    DROP TABLE public.transaction;
       public         heap    postgres    false            �            1259    16426    transaction_id_seq    SEQUENCE     �   CREATE SEQUENCE public.transaction_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.transaction_id_seq;
       public          postgres    false    218            �           0    0    transaction_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.transaction_id_seq OWNED BY public.transaction.id;
          public          postgres    false    217            �            1259    16409    wallet    TABLE     m   CREATE TABLE public.wallet (
    id integer NOT NULL,
    username character varying,
    balance integer
);
    DROP TABLE public.wallet;
       public         heap    postgres    false            �            1259    16408    wallet_id_seq    SEQUENCE     �   CREATE SEQUENCE public.wallet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.wallet_id_seq;
       public          postgres    false    216            �           0    0    wallet_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.wallet_id_seq OWNED BY public.wallet.id;
          public          postgres    false    215                       2604    16430    transaction id    DEFAULT     p   ALTER TABLE ONLY public.transaction ALTER COLUMN id SET DEFAULT nextval('public.transaction_id_seq'::regclass);
 =   ALTER TABLE public.transaction ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218                       2604    16412 	   wallet id    DEFAULT     f   ALTER TABLE ONLY public.wallet ALTER COLUMN id SET DEFAULT nextval('public.wallet_id_seq'::regclass);
 8   ALTER TABLE public.wallet ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    16427    transaction 
   TABLE DATA           U   COPY public.transaction (id, wallet_id, name, description, amount, type) FROM stdin;
    public          postgres    false    218   &       �          0    16409    wallet 
   TABLE DATA           7   COPY public.wallet (id, username, balance) FROM stdin;
    public          postgres    false    216   ~       �           0    0    transaction_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.transaction_id_seq', 12, true);
          public          postgres    false    217            �           0    0    wallet_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.wallet_id_seq', 1, false);
          public          postgres    false    215            "           2606    16434    transaction transaction_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.transaction DROP CONSTRAINT transaction_pkey;
       public            postgres    false    218                        2606    16416    wallet wallet_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.wallet
    ADD CONSTRAINT wallet_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.wallet DROP CONSTRAINT wallet_pkey;
       public            postgres    false    216            �   H   x^3�4����R
��>.��� ����eR�_�Z ��sR�TTa�K��3*,`
b���� �(*�      �      x^3��L+��4�0 �=... 7dL     