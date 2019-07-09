from keras.preprocessing.image import ImageDataGenerator
from keras import backend as K
from keras.models import Sequential
from keras.layers import Activation, Dropout, Flatten, Dense
from keras.layers import Conv2D, MaxPooling2D


# dimensions of images.
imageWidth, imageHeight = 150, 150

train_data_dir = 'data/train'
validation_data_dir = 'data/validation'
trainSamplesNum = 2000 # number of train images
validationSamplesNum = 10 # number of validation samples
batchSize = 5
epochs = 60


if K.image_data_format() == 'channels_first':
    input_shape = (3, imageWidth, imageHeight)
else:
    input_shape = (imageWidth, imageHeight, 3)

model = Sequential()
model.add(Conv2D(32, (3, 3), input_shape=input_shape))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))

model.add(Conv2D(32, (3, 3)))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))

model.add(Conv2D(64, (3, 3)))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))

model.add(Flatten())
model.add(Dense(64))
model.add(Activation('relu'))
model.add(Dropout(0.5))
model.add(Dense(1))
model.add(Activation('sigmoid'))

model.compile(loss='binary_crossentropy',
              optimizer='rmsprop',
              metrics=['accuracy'])

# augmentation config used for training
train_datagen = ImageDataGenerator(
    rescale=1. / 255,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True)

# augmentation config used for testing:
# just rescaling
test_datagen = ImageDataGenerator(rescale=1. / 255)

train_generator = train_datagen.flow_from_directory(
    train_data_dir,
    target_size=(imageWidth, imageHeight),
    batchSize=batchSize,
    class_mode='binary')

validation_generator = test_datagen.flow_from_directory(
    validation_data_dir,
    target_size=(imageWidth, imageHeight),
    batchSize=batchSize,
    class_mode='binary')

model.fit_generator(
    train_generator,
    steps_per_epoch=trainSamplesNum // batchSize,
    epochs=epochs,
    validation_data=validation_generator,
    validation_steps=validationSamplesNum // batchSize)

model.save_weights('cnnweights.h5')
