sh remove.sh
psql -f install.sql -U postgres
psql -d app_base -f structure.sql -U table_admin
psql -d app_base -f data.sql -U table_admin
