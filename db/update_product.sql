UPDATE product
SET
name = $1,
price = $2,
img_url = $3
WHERE product_id = $4;