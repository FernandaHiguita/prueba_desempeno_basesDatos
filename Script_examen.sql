--DDL data definition lenguage 

create table luisa_h_2.customers(
customer_id uuid primary key default gen_random_uuid(), 
customer_name varchar(250), 
customer_email varchar(250), 
customer_adress varchar(250), 
customer_phone varchar(250), 
created_at timestamp 
);

create table luisa_h_2.suppliers(
supplier_id uuid primary key default gen_random_uuid(), 
supplier_name varchar(250),
supplier_email varchar(250)
);

create table luisa_h_2.products(
product_sku uuid primary key default gen_random_uuid(), 
product_name varchar(250) not null , 
unit_price bigint not null, 
stock int, 
supplier_id uuid, 
constraint fk_supplier_id
foreign key (supplier_id)
references luisa_h_2.suppliers(supplier_id)
on delete set null
on update cascade
);

create table luisa_h_2.transactions(
transaction_id uuid primary key default gen_random_uuid(), 
date_transaction date, 
cant_products int, 
total_line_value bigint, 
customer_id uuid, 
constraint fk_customer_id
foreign key (customer_id)
references luisa_h_2.customers(customer_id)
on delete set null 
on update cascade
);

create table luisa_h_2.transactions_details(
transaction_detail_id uuid primary key default gen_random_uuid(), 
product_sku uuid, 
transaction_id uuid, 
constraint fk_product_id
foreign key (product_sku)
references luisa_h_2.products(product_sku)
on delete set null 
on update cascade, 
constraint fk_transaction_id 
foreign key (transaction_id)
references luisa_h_2.transactions(transaction_id)
on delete set null 
on update cascade
);

-- Migration of data 




