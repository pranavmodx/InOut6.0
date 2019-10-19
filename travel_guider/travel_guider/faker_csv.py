from faker import Faker
from faker.providers import internet, geo
import pandas as pd

faker = Faker()
df = []
for n in range(100):
    df.append({'Name':faker.name(), 'Job':faker.job() ,'Address':faker.address(), 'Co-ordinates':faker.local_latlng(country_code="IN", coords_only=False)})

df =  pd.DataFrame(df)
print(df)
