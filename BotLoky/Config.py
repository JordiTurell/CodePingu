from copyreg import constructor


class Config: 

    token = ''

    def __init__(self):
        token = ''

    def getToken(self):
        return self.token


