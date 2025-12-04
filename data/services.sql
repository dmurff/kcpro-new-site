insert into services (name, description, price, is_active)
values
  ('relocate_hoop', 'We safely move your hoop from one location to another and install it like new.', 1100.00, false),
  ('hoop_concrete', 'Concrete and anchor work for basketball hoop installations.', 500.00, false),
  ('hoop_assembly', 'Assembly of your basketball hoop without concrete installation.', 500.00, false),
  ('delivery', 'Professional delivery of your basketball hoop to your home.', 150.00, false),
  ('hoop_repair', 'Repair and maintenance service for damaged hoops.', 50.00, false),


insert into services (name, display_name, description, price, is_active, is_visible_in_ui)
values
  ('relocate_hoop', 'Relocate Hoop', 'We safely move your hoop from one location to another and install it like new.', 1100.00, false, false),
  ('hoop_concrete', 'Concrete / Anchor Install', 'Concrete and anchor work for basketball hoop installations.', 500.00, false, false),
  ('hoop_assembly', 'Hoop Assembly Only', 'Assembly of your basketball hoop without concrete installation.', 500.00, false, false),
  ('delivery', 'Hoop Delivery', 'Professional delivery of your basketball hoop to your home.', 150.00, false, false),
  ('hoop_repair', 'Hoop Repair', 'Repair and maintenance service for damaged hoops.', 50.00, false, false);
